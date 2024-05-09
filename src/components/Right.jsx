import React from 'react'
import { Link } from 'react-router-dom'

const Right = () => {
  return (
    <>
     <div>
      {/* Search */}
      <div className="border">
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
      {/* Search */}
      {/* Categories */}
      <div className="mt-3 border py-2 px-4 pc-blog-category">
        <h4 className="text-red font-1">Categories</h4>
        <ul className="list-unstyled">
          <li><Link to='/blog'>Category 1</Link></li>
          <li><Link to='/blog'>Category 2</Link></li>
          <li><Link to='/blog'>Category 3</Link></li>
          <li><Link to='/blog'>Category 4</Link></li>
        </ul>
      </div>
      {/* Categories */}
      {/* Recent */}
      <div className="mt-3 border p-2 border">
        <h4 className="text-red font-1">Recent Posts</h4>
        {/* 1 */}
        <div className="row mb-3">
          <div className="col-4 d-flex justify-content-center align-items-center"><img src={'https://via.placeholder.com/70x70'} className="img-fluid" alt="post" /></div>
          <div className="col-8">
            <p className="small">The title of the post goes here <br /> <span className="text-red">11-January-2024</span></p>
          </div>
        </div>
        {/* 2 */}
        <div className="row mb-3">
          <div className="col-4 d-flex justify-content-center align-items-center"><img src={'https://via.placeholder.com/70x70'} className="img-fluid" alt="post" /></div>
          <div className="col-8">
            <p className="small">The title of the post goes here <br /> <span className="text-red">11-January-2024</span></p>
          </div>
        </div>
        {/* 3 */}
        <div className="row mb-3">
          <div className="col-4 d-flex justify-content-center align-items-center"><img src={'https://via.placeholder.com/70x70'} className="img-fluid" alt="post" /></div>
          <div className="col-8">
            <p className="small">The title of the post goes here <br /> <span className="text-red">11-January-2024</span></p>
          </div>
        </div>
        {/* End */}
      </div>
      {/* Recent */}
    </div> 
    </>
  )
}

export default Right