import React from "react";
import { Facebook, Instagram, X, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-gray-800 py-10 px-5 rounded-lg mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                {/* Brand and Tagline */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold flex items-center">
                        <span className="bg-green-500 text-black rounded-full p-2 mr-2">
                            🌟
                        </span>
                        BetterWorld
                    </h2>
                    <p className="mt-2">Empowering Change, One Donation at a Time.</p>
                </div>

                {/* Links */}
                <div className="flex justify-between space-x-16">
                    <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold">Donate</h3>
                        <a href="#">Environemt</a>
                        {/* <a href="#">Social</a> */}
                        {/* <a href="#">Medicine</a> */}
                        <a href="#">Disaster</a>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold">Help</h3>
                        <a href="#">FAQ</a>
                        {/* <a href="#">Privacy Policy</a> */}
                        {/* <a href="#">Accessibility</a> */}
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold">Company</h3>
                        <a href="#">About Us</a>
                        {/* <a href="#">Careers</a> */}
                        {/* <a href="#">Services</a> */}
                        {/* <a href="#">Pricing</a> */}
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-green-500">
                        <Instagram />
                    </a>
                    <a href="#" className="hover:text-green-500">
                        <Facebook />
                    </a>
                    <a href="#" className="hover:text-green-500">
                        <X />
                    </a>
                    <a href="#" className="hover:text-green-500">
                        <Linkedin />
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-8">
                <p className="text-sm">
                    &copy; BetterWorld.
                </p>
            </div>
        </footer>
    );
}
