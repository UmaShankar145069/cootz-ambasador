import React, { PureComponent } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./Contest.css";
import share from "../../assets/images/share.png";

class Contest extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      contest: "",
      contestHistory: [],
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  componentDidMount() {
    this.getData();
  }

  async contestSubmit(e) {
    e.preventDefault();

    const res = await fetch("https://clg-ambassador.herokuapp.com/contest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contest: this.state.contest,
      }),
    });

    const data = await res.json();

    if (res.status === 404 || !data) {
      console.log("please enter valid contest");
      window.alert("please enter valid contest");
    } else {
      console.log("Submission successful");
    }
  }

  async getData() {
    try {
      const res = await fetch("https://clg-ambassador.herokuapp.com/contest", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      this.setState({ contestHistory: data });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      const tData = this.state.contestHistory;

      const slice = tData.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );

      this.setState({
        pageCount: Math.ceil(tData.length / this.state.perPage),
        orgtableData: this.state.contestHistory,
        tableData: slice,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        {/* Main section  */}
        <div id="main">
          <div className="contest-container">
            <form method="POST" id="req-contest" className="req-contest">
              <label className="contest_id-title" htmlFor="contest_id">
                Request Contest
              </label>
              <br />
              <input
                type="text"
                name="contest_id"
                id="contest_id"
                value={this.state.contest}
                onChange={(e) => this.setState({ contest: e.target.value })}
                placeholder="Enter Contest"
                required
              />
              <br />
              <input
                type="sumbit"
                value="Next"
                className="submit"
                onClick={(e) => this.contestSubmit(e)}
              />
            </form>
          </div>

          {/* Referal history table  */}
          <h2 className="table-title">Contest History</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Serial No.</th>
                <th scope="col">Contest ID</th>
                <th scope="col">Contest Status</th>
                <th scope="col">Share</th>
              </tr>
            </thead>
            <tbody className="page-data">
              {this.state.tableData.map((tdata, i) => (
                <tr>
                  <td>{tdata.id}</td>
                  <td>{tdata.contestId}</td>
                  <td>{tdata.contestStatus}</td>
                  <td>
                    <img
                      src={share}
                      alt="share-icon"
                      style={{ width: 25, height: 25, cursor: "pointer" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </>
    );
  }
}

export default Contest;
