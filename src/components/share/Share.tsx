import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MouseEvent, useContext, useState } from "react";
import Friend from "../../assets/friend.png";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import { AuthContext } from "../../context/AuthContext";
import { axiosWithCookie, axiosWithCookieAndImage } from "../../helpers/customAxios";
import "./Share.scss";

const Share = () => {
  const [file, setFile] = useState<File | null>(null);
  const [desc, setDesc] = useState("");

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const upload = async () => {
    try {
      if (file) {
        // recuerda que siempre hay que crear un FormData para subir un File
        const formData = new FormData();
        formData.append("file", file);
        const res = await axiosWithCookieAndImage.post("/upload", formData);
        // res.data es la url
        return res.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const mutation = useMutation(
    // primer arg es el fetcher(newPost) => {return axios.post('')}
    (newPost) => axiosWithCookie.post("/posts", newPost),
    // segundo arg es el refetch de la cache que corresponda
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    },
  );

  const handleClick = async (evt: MouseEvent) => {
    if (!desc) return;
    evt.preventDefault();
    let imgUrl = "";
    if (file) {
      imgUrl = await upload();
    }
    // @ts-ignore
    mutation.mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={currentUser?.profilePic || "src/assets/2.png"} alt="" />
            <input
              type="text"
        
              placeholder={`What's on your mind ${currentUser?.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          {/* contenedro dcho que muestra el file en miniatura */}
          <div className="right">
            {file && <img className="file" alt="" src={URL.createObjectURL(file)} />}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files![0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
