import * as React from "react";
import Header from "./Header"

export default function User() {
  return  <>
  {<Header/>}
    <div className="mt-16 w-full max-md:mt-5 max-md:max-w-full">
      <div className="flex gap-1 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[350px] max-md:ml-0 max-md:w-full border">
          <div className="flex flex-col grow items-start px-20 pt-8 pb-20 mx-auto w-full text-base leading-6 text-black bg-white max-md:px-5 max-md:mt-10">
            <div className="flex gap-3 justify-between text-sm">
              <div>Home</div>
              <div>My Account</div>
            </div>
            <div className="mt-20 font-medium max-md:mt-10">
              Manage My Account
            </div>
            <div className="mt-3.5 ml-6 text-red-500 max-md:ml-2.5">
              My Profile
            </div>
            <div className="mt-3.5 ml-6 max-md:ml-2.5">Address Book</div>
            <div className="mt-4">My Payment Options</div>
            <div className="mt-8 font-medium">My Orders</div>
            <div className="mt-4 ml-6 max-md:ml-2.5">My Returns</div>
            <div className="mt-4 ml-6 max-md:ml-2.5">My Cancellations</div>
            <div className="mt-6 font-medium">My WishList</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start pt-7 pr-11 pb-5 pl-2 w-full text-base leading-6 bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full text-black w-[740px]">
              <div className="text-xl font-medium leading-7 text-blue-600 max-md:max-w-full">
                Edit Your Profile
              </div>
              <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col">
                  <div>First Name</div>
                  <div className="flex flex-col justify-center mt-2 whitespace-nowrap">
                    {/* <input  className="justify-center items-start px-5 py-2 rounded-sm bg-neutral-100 max-md:pr-5"> */}
                    <input  className="justify-center items-start px-5 py-2 rounded-sm bg-neutral-100 max-md:pr-5" type="text" id="fname" name="fname"/>
                      
                    {/* </div> */}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>Last Name</div>
                  <div className="flex flex-col justify-center  mr-20 mt-2 whitespace-nowrap">
                  <input  className="justify-center items-start px-5 py-2 rounded-sm bg-neutral-100 max-md:pr-5" type="text" id="fname" name="fname"/>

                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col whitespace-nowrap">
                  <div>Email</div>
                  <div className="flex flex-col justify-center mt-2">
                  <input  className="justify-center items-start px-5 py-2 rounded-sm bg-neutral-100 max-md:pr-5" type="text" id="fname" name="fname"/>

                  </div>
                </div>
                <div className="flex flex-col">
                  <div>Address</div>
                  <div className="flex flex-col justify-center  mr-20 mt-2 whitespace-nowrap">
                  <input  className="justify-center items-start px-5 py-2 rounded-sm bg-neutral-100 max-md:pr-5" type="text" id="fname" name="fname"/>

                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-6 max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="max-md:max-w-full">Password Changes</div>
                  <div className="flex flex-col justify-center mt-2 max-md:max-w-full">
                  <input placeholder="Current Password"  className="justify-center items-start px-5 py-2 rounded-sm bg-neutral-100 max-md:pr-5" type="text" id="fname" name="fname"/>

                  </div>
                </div>
                <div className="flex flex-col justify-center mt-4 max-md:max-w-full">
                <input placeholder="New Password" className="justify-center items-start px-5 py-2 rounded-sm bg-neutral-100 max-md:pr-5" type="text" id="fname" name="fname"/>

                </div>
                <div className="flex flex-col justify-center mt-4 max-md:max-w-full">
                <input placeholder="Confirm New Password"  className="justify-center items-start px-5 py-2 rounded-sm bg-neutral-100 max-md:pr-5" type="text" id="fname" name="fname"/>

                </div>
              </div>
            </div>
            <div className="justify-center px-4 py-2 mt-7 font-medium bg-blue-500 rounded-sm text-neutral-50">
              Save Changes
            </div>
          </div>
        </div>
      </div>
    </div>
 </>
}