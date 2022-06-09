import React from "react";

export const Busqueda = (props) => {
  return (
    <>
      <div style={{ margin: "10px" }}>
        <h2>Search Countries</h2>
        <form onSubmit={props.doSearch}>
          <div>
            Name:
            <input
              value={props.searchTerm}
              onChange={props.handleSearchInput}
            />
          </div>
          <div>
            <button type="submit" hidden></button>
          </div>
          <div style={{ marginTop: "10px" }}>
            {" "}
            <hr></hr>
            Results: <br />
          </div>
        </form>
      </div>
    </>
  );
};
export default Busqueda;
