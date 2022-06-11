import React from "react";

function Header(props) {

  const handleChange = (e) => {
    props.onSearch(e.target.value);
  }

  const handleSortOrderChange = (e) => {
    props.onSort(e.target.value)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#635666" }}>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" style={{ alignItems: "center", justifyContent: "space-evenly" }}id="navbarSupportedContent">
            <select className="form-select" aria-label="Default select example" onChange={handleSortOrderChange} style={{ backgroundColor: "#D3EBCD", color: "#635666", width: 'auto'}}>
              <option value="sort">Sort by</option>
              <option value="asc">Ascending Order</option>
              <option value="desc">Descending Order</option>
            </select>
            <form className="d-flex" role="search" style={{ color: "#635666", width: '25%'}}>
              <input
                className="form-control"
                style={{ backgroundColor: "#D3EBCD" }}
                placeholder="Type Title Here"
                aria-label="Search"
                type="search"
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
