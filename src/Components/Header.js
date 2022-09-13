import React from "react";
import {
  MapPinIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const { basket } = useSelector((state) => state.basket);
  const [user] = useAuthState(auth);

  const handleSignOut = (e) => {
    e.preventDefault();
    auth.signOut();
  };

  return (
    <header>
      <div className="flex flex-grow items-center bg-amazon_blue p-1 py-2 ">
        <div className="flex items-center flex-grow space-x-2 md:space-x-5 ">
          <Link to="/">
            <img
              className="sm:hidden object-contain cursor-pointer h-11 bg-amazon_blue"
              src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/world-brand-amazon-png-logo-vector-27.png"
              alt="img"
            />
            <img
              className=" hidden sm:inline-flex h-9 object-contain cursor-pointer px-2 mt-2"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="img"
            />
          </Link>
          <div className=" hidden lg:flex lg:flex-col text-white space-x-2 whitespace-nowrap ">
            <p className="text-[15px] ml-7 text-gray-300 ">Hello</p>
            <div className="flex items-center">
              <MapPinIcon className="h-5  text-white" />
              <h2 className="text-sm font-semibold">Select your address</h2>
            </div>
          </div>
          <div className="flex items-center flex-grow h-9 rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
            <input
              type="text"
              className="h-full flex-shrink rounded-l-md p-3 flex-grow focus:outline-none border-0"
            />
            <MagnifyingGlassIcon className="h-5 mx-3" />
          </div>
          <div className=" text-white whitespace-nowrap items-center text-xs  flex space-x-2 md:space-x-6">
            {user ? (
              <div
                onClick={handleSignOut}
                className=" hidden md:flex md:flex-col cursor-pointer link"
              >
                <p>Hello, {user.email}</p>
                <p className="font-bold md:text-sm">Sign Out</p>
              </div>
            ) : (
              <Link
                to="/login"
                className=" hidden md:flex md:flex-col cursor-pointer link"
              >
                <p>Hello, SignIn</p>
                <p className="font-bold md:text-sm">Account & Lists </p>
              </Link>
            )}
            <div className="hidden sm:inline-block cursor-pointer link">
              <p>Return</p>
              <p className=" font-bold md:text-sm">& Orders</p>
            </div>
            <Link
              to="/checkout"
              className="cursor-pointer  relative flex link text-center"
            >
              <span className="absolute text-center text-black font-bold bg-yellow-500 top-0 right-0 lg:right-16 w-4 h-4 rounded-full">
                {basket.length}
              </span>
              <ShoppingCartIcon className=" h-9 pr-2" />
              <p className=" hidden lg:flex font-bold md:text-sm mx-3 my-auto ">
                Basket
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex items-center bg-amazon_blue-light whitespace-nowrap text-white space-x-4 px-2 py-1.5 ">
        <p className="flex items-center link cursor-pointer">
          <Bars4Icon className="h-7 pr-2" />
          All
        </p>
        <p className="link">Prime Video </p>
        <p className="link">Amazon Business</p>
        <p className="link  hidden lg:inline-flex"> Today's Deals</p>
        <p className=" link hidden lg:inline-flex">Electronics</p>
        <p className=" link hidden lg:inline-flex">Food & Grocery</p>
        <p className=" link hidden lg:inline-flex">Prime</p>
        <p className=" link hidden lg:inline-flex"> Buy Again</p>
        <p className=" link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className=" link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
