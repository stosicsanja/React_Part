import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        alt=""
        src="https://marketplace.canva.com/EAE9uSVM4Tc/1/0/1600w/canva-dark-red-white-black-digital-nomad-youtube-banner-bQDED11CZY8.jpg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
          
              Music
           
          </span>
          <span className="postCat">
           
              Life
          
          </span>
        </div>
        <span className="postTitle">
        
            Lorem ipsum dolor sit amet
       
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}