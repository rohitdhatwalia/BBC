import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";
import Quotes from "./Quotes";
import "./styles.css";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://www.breakingbadapi.com/api/characters"
      );
      setPosts(response.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <div className="header" id="home">
        <div className="transbox">
          <h1>Breaking Bad Characters</h1>
          <div className="img1">
            <img
              src="https://avatars1.githubusercontent.com/u/45493793?s=460&amp;u=81836d78246a7e3c0724635018ab93450d6ba9e6&amp;v=4"
              alt="Rohit Dhatwalia"
              width="80"
            ></img>
          </div>
          <h3>
            by
            <a href="">
              <br></br>Rohit Dhatwalia
            </a>
          </h3>
        </div>
      </div>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <div className="search-container">
          <form className="example" action="/action_page.php">
            <input
              type="text"
              id="myInput"
              onKeyUp={myFunction}
              placeholder="Type here.."
              name="search"
            ></input>
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
      <div className="footer-content" id="contact">
        <h2>Contact Me</h2>
        <address>
        Rohit Dhatwalia<br></br>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            PTU , India
          </a>
        </address>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://twitter.com/RohitDhatwalia1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-twitter"></i>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://www.instagram.com/rohitdhatwalia20/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://www.instagram.com/rohitdhatwalia20/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("p");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
