import { IoReorderThreeOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoChevronDownCircleSharp } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { FaTableCellsLarge } from "react-icons/fa6";
import { VscFilter } from "react-icons/vsc";
import { MdOutlineLockReset } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPowerOutline } from "react-icons/io5";
import { IoIosGift } from "react-icons/io";

import "./adminstyle.css";
const TrackOrder = () => {
  return <>
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-2 border border-info">

          <div className='col-md-3 title header-1 '>
            <div className='mt-2 mb-2 icon  d-flex justify-content-center align-items-center'>
              <IoIosGift className='fs-3 text-light ' />
            </div>
            <span className='ms-1 fs-4 name'>
              UtsavUphaar
            </span>
          </div>
        </div>

        <div className="col-md-10 border border-info ml-2">
          <div className="cotainer ">
            <div className="row ">
              <div className="col-md-1 threeline ">
                <IoReorderThreeOutline className="fs-1 mt-2 threeline" />
              </div>
              <div className="col-md-3 ">
                <form className="d-flex w-4 mt-2 " role="search">

                  <input className="form-control me-2 rounded-pill fs-4 searchbar" type="search" placeholder="Search" aria-label="Search" />

                </form>
              </div>

              <div className="col-md-4 ">
              </div>
              <div className="col-md-4 ">
                <div className="row">
                  <div className="col-md-2 ">
                    <IoNotificationsOutline className="ms-3 text-primary moni mt-2 " />
                  </div>
                  <div className="col-md-2 ">
                    <img src="moniyroyadmin.jpg" className="admin img-fluid rounded-circle mt-2"  ></img> </div>

                  <div className="col-md-3 ">
                    <p className="textadmin">Moni Roy</p>
                    <p className="textadmin">Admin</p>
                  </div>
                  <div className="col-md-2 ">
                    <IoChevronDownCircleSharp className="mt-2 moni" />
                  </div>


                </div>

              </div>


            </div>

          </div>


        </div>
      </div>

    </div>





    {/* new start in last */}
    <div className="container-fluid  ">
      <div className="row">
        <div className="col-md-2 border ml-3">
          <div className="col-md-5  mt-1 p-1 fs-5">


            Dashbord

            <br></br>
          </div>
          <div className="col-md-4  mt-1 p-1 fs-5">
            Product
            <br></br>
          </div>

          <div className="col-md-4  d-flex mt-1 p-1 fs-5">
            <MdOutlineWatchLater className="mt-1 " />  Favorites
          </div>


          <div className="col-md-5 ">
            <span className="d-flex mt-3 fs-5"> <FaTableCellsLarge className="mt-1" />&nbsp;&nbsp;Inbox</span>
          </div>
          <div className="col-md-6 ">
            <span className="d-flex mt-3 fs-5"><FaRegHeart className="mt-1" />&nbsp; &nbsp;Order List</span>
          </div>
          <div className="col-md-8 fs-5">
            <span className="d-flex mt-3"><TiMessages className="mt-1" />&nbsp; &nbsp;Product Stock</span>
          </div>
          <hr></hr>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="col-md-5 seting">
            <span className="d-flex mt-3 fs-5"><IoSettingsOutline className="mt-1 seting" />&nbsp; &nbsp;Seting</span>
          </div>

          <div className="col-md-5 ">
            <span className="d-flex mt-3 fs-5"><IoPowerOutline className="mt-1 " />&nbsp; &nbsp;Logout</span>
          </div>

          <div>


          </div>

        </div>
        {/* inside box */}


        <div className="col-md-10 oderdata ">
          <h1 className="fs-2 border">Order Lists</h1>


          <br></br>
          <div className="col-md-4  col-lg-3  d-flex ">
            <div className="col-md-2  p-3  ">
              <VscFilter className="fs-2  filter2" />

            </div>
            <div className="col-md-3   fs-5 border p-3 filter2">
              Filter By
              &nbsp;   &nbsp;
            </div>
            <div className="col-md-5   border fs-5 p-3  d-flex  filter2">
              <p>24 Feb 2024   &nbsp;   &nbsp;</p>
              <IoChevronDownCircleSharp className="mt-1 order filter2 " />
            </div>

            <div className="col-md-5   p-3 border filter3 fs-5  d-flex ">
              Order Type   &nbsp;   &nbsp;
              <IoChevronDownCircleSharp className="mt-1 order d-flex " />
            </div>

            <div className="col-md-5   border fs-5 p-3 d-flex ">
              Order Status   &nbsp;   &nbsp;
              <IoChevronDownCircleSharp className="mt-1 order" />
            </div>
            <div className="col-md-5  border fs-5 p-3 d-flex text-danger ">
              Reset Filter
              &nbsp;   &nbsp;
              <MdOutlineLockReset className="mt-1 text-danger fs-2" />
            </div>

          </div>





          <div className="col-md-12 border p-3 mt-2 w-100 table-responsive table-responsive-sm">

            <table className="table w-100 table-hover ">
              <thead >
                <tr className="table-info">
                  <th scope="col">ID</th>
                  <th scope="col" >NAME</th>
                  <th scope="col">ADDRESS</th>
                  <th scope="col">DATE</th>
                  <th scope="col">TYPE</th>
                  <th scope="col">STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1001</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>  <button type="button" class="btn success">Deliverid</button></td>

                </tr>
                <tr>
                  <td>1001</td>
                  <td>Jacob</td>
                  <td>Jacob</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>  <button type="button" class="btn warning">Pending</button></td>
                </tr>
                <tr>
                  <td>1003</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>  <button type="button" class="btn danger">Rejected</button></td>

                </tr>
              </tbody>
            </table>





          </div>
        </div>




      </div>
    </div>

  </>

}
export default TrackOrder;