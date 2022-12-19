import "./RightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        {/* first card */}
        <div className="item">
          <span>Suggestions For You</span>
          {/* user 1 */}
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/1.png" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dissmiss </button>
            </div>
          </div>
          {/* user 2 */}
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/1.png" alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dissmiss </button>
            </div>
          </div>
        </div>
        {/* second card */}
        <div className="item">
          <span>Latest Activities</span>
          {/* milestone 1 */}
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/1.png" alt="" />
              <p>
                <span>Jane Doe</span>
                {` `}
                changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          {/* milestone 2 */}
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/1.png" alt="" />
              <p>
                <span>Jane Doe</span>
                {` `}
                changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          {/* milestone 3 */}
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/1.png" alt="" />
              <p>
                <span>Jane Doe</span>
                {` `}
                changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          {/* milestone 4 */}
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/1.png" alt="" />
              <p>
                <span>Jane Doe</span>
                {` `}
                changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        {/* third card */}
        <div className="item">
          <span>Online Friends</span>
          {/* friend 1 */}
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/1.png" alt="" />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          {/* friend 2 */}
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/1.png" alt="" />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          {/* friend 3 */}
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/1.png" alt="" />
              <div className="online" />
              <span>June Doe</span>
            </div>
          </div>
          {/* friend 4 */}
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/1.png" alt="" />
              <div className="online" />
              <span>Pacman</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightBar;
