// import { ChevronRight } from 'lucide-react'
import React from "react";
import footerImage from "../../assest/logo-footer.png";
import { TfiFacebook } from "react-icons/tfi";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const Navigate = useNavigate();
  return (
    <>
      <footer className="w-full py-20" style={{ background: "#1A1B1F" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center space-x-8 md:flex-row">
          <div className="" style={{width:'80vw'}}>
            <div>
              <img src={footerImage} alt="footimage" />
            </div>
            <div className="flex gap-5 my-3 mx-3">
              <div
                class="rounded-full bg-slate-800  text-white p-3"
                style={{ background: "#3f3f43" }}
              >
                <TfiFacebook />
              </div>
              <div
                class="rounded-full bg-slate-800  text-white p-3"
                style={{ background: "#3f3f43" }}
              >
                <SlSocialTwitter />
              </div>
              <div
                class="rounded-full bg-slate-800  text-white p-3"
                style={{ background: "#3f3f43" }}
              >
                <FaInstagram />
              </div>
            </div>
          </div>
          <div
            className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-4"
            style={{ width: "80vw" }}
          >
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-bold text-white">PRODUCT</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li className="cursor-pointer hover:text-white">Teams</li>
                <li className="cursor-pointer hover:text-white">Blogs</li>
                <li className="cursor-pointer hover:text-white">FAQs</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-bold text-white">RESOURCES</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li className="cursor-pointer hover:text-white" onClick={()=>Navigate('/signup')}>Singup</li>
                <li className="cursor-pointer hover:text-white" onClick={()=>Navigate('/login')}>Login</li>
                <li className="cursor-pointer hover:text-white">Blog</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-bold text-white">COMPANY</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li className="cursor-pointer hover:text-white">Career</li>
                <li className="cursor-pointer hover:text-white">Contact</li>
                <li className="cursor-pointer hover:text-white">Investor</li>
                <li className="cursor-pointer hover:text-white">Terms</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-bold text-white">COMPANY</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li className="cursor-pointer hover:text-white">About</li>
                <li className="cursor-pointer hover:text-white">Contact</li>
                <li className="cursor-pointer hover:text-white">Team</li>
                <li className="cursor-pointer hover:text-white">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="mx-auto py-3" style={{ background: "#343a40" }}>
        <div className="text-center pt-5">
          <div
            className=" mb-4"
            style={{
              fontSize: "13px",
              fontWeight: "400",
              lineHeight: "19px",
              color: "#6c757d",
            }}
          >
            Copyright © 2024. Designed & Developed by Themefisher
          </div>
          <div
            className="text-white"
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "25px",
              color: "#808080",
            }}
          >
            Distributed By Themewagon
          </div>
        </div>
      </div>
    </>
  );
}
