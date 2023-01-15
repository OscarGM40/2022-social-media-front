import "./Update.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ChangeEvent, MouseEvent, useMemo, useState } from "react";
import { User } from "../../types/User.type";
import { axiosWithCookie, axiosWithCookieAndImage } from "../../helpers/customAxios";

interface UpdateProps {
  setOpenUpdate: Function;
  user?: User;
}
const Update = ({ setOpenUpdate, user }: UpdateProps) => {
  const [cover, setCover] = useState<File | null>(null);
  const [profile, setProfile] = useState<File | null>(null);
  const [texts, setTexts] = useState({
    email: user?.email || "",
    password: user?.password || "",
    name: user?.name || "",
    city: user?.city || "",
    website: user?.website || "",
  });

  const upload = async (file: File) => {
    console.log(file);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axiosWithCookieAndImage.post("/upload", formData);
      return res.data;
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (user) => {
      return axiosWithCookie.put("/users", user);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["user"]);
      },
    },
  );

    const handleSubmit= async (e:MouseEvent) => {
      e.preventDefault();
      let coverUrl;
      let profileUrl;
      coverUrl = cover ? await upload(cover) : user?.coverPic;
      profileUrl = profile ? await upload(profile) : user?.profilePic;
      // @ts-ignore
      mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });
      console.log(user)
      setOpenUpdate(false);
      setCover(null);
      setProfile(null);
    }
    useMemo(() => console.log(user),[])

  return (
    <div className="update">
      <div className="wrapper">
        <h1>Update Your Profile</h1>
        <form>
          <div className="files">
            <label htmlFor="cover">
              <span>Cover Picture</span>
              <div className="imgContainer">
                <img
                  src={cover ? URL.createObjectURL(cover) : "/upload/" + user?.coverPic}
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </label>
            <input
              type="file"
              id="cover"
              style={{ display: "none" }}
              onChange={(e) => setCover(e.target.files![0])}
            />
            <label htmlFor="profile">
              <span>Profile Picture</span>
              <div className="imgContainer">
                <img
                  src={profile ? URL.createObjectURL(profile) : "/upload/" + user?.profilePic}
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </label>
            <input
              type="file"
              id="profile"
              style={{ display: "none" }}
              onChange={(e) => setProfile(e.target.files![0])}
            />
          </div>
          <label>Email</label>
          <input type="text" value={texts.email} name="email" onChange={handleChange} />
          <label>Password</label>
          <input type="text" value={texts.password} name="password" onChange={handleChange} />
          <label>Name</label>
          <input type="text" value={texts.name} name="name" onChange={handleChange} />
          <label>Country / City</label>
          <input type="text" name="city" value={texts.city} onChange={handleChange} />
          <label>Website</label>
          <input type="text" name="website" value={texts.website} onChange={handleChange} />
          <button onClick={handleSubmit}>Update</button>
        </form>
        <button className="close" onClick={() => setOpenUpdate(false)}>
          close
        </button>
      </div>
    </div>
  );
};
export default Update;
