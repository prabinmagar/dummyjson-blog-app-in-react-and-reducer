import React, {useState} from 'react';
import "./HomePage.scss";
import { banner_image, search_icon } from '../../utils/images';
import Title from '../../components/Title/Title';
import BlogList from '../../components/BlogList/BlogList';
import { useBlogsContext } from '../../context/blogsContext';

const HomePage = () => {
  const { blogs, setSearchTerm, searchTerm, fetchBlogsFromSearch} = useBlogsContext();

  const [erroMsg, setErrorMsg] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if((e.target.value.replace(/[^\w\s]/gi,"")).length !== 0){
      setSearchTerm(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    fetchBlogsFromSearch(searchTerm);
  }

  return (
    <div className = "main-holder bg-light-blue">
      <header className='header' style = {{
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${banner_image}) center/cover no-repeat`
      }}>
        <div className='container'>
          <div className='header-content text-center flex align-center justify-center flex-column text-white'>
            <h1 className='text-uppercase header-title ls-2'>a beatuiful blog with no images required</h1>
            <form className='flex align-center justify-center' onSubmit={(e) => handleSearchResult(e)}>
              <div className='header-input-group flex align-stretch'>
                  <input type = "text" className='form-control fs-20' placeholder='Search here blog ...' onChange={(e) => handleSearchTerm(e)} />
                  <span className='form-text font-rubik fs-14 fw-4'>{erroMsg}</span>
                  <button type = "submit" className='form-btn bg-purple flex align-center justify-center'>
                    <img src = {search_icon} alt = "" />
                  </button>
              </div>
            </form>
          </div>
        </div>
      </header>

      <section className='section py-7'>
        <div className='container'>
          <div className='section-content'>
            <Title title = "Blogs" color = {"#0D1741"} />
            { <BlogList blogs = {blogs} />}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage