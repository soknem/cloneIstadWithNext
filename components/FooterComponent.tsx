"use client";

import { Footer } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { customTheme } from "./CustomFlowbiteThemeComponent";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function FooterComponent() {
  return (
    <Footer container theme={customTheme.footer}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="./istad logo.png"
              alt="istad Logo"
              name="CSTAD"
              className="text-white" 
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" className="text-white" />{" "}
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Flowbite
                </Footer.Link>{" "}
                <Footer.Link href="#" className="text-white">
                  Tailwind CSS
                </Footer.Link>{" "}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-white" />{" "}
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Github
                </Footer.Link>{" "}
                <Footer.Link href="#" className="text-white">
                  Discord
                </Footer.Link>{" "}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-white" />{" "}
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Privacy Policy
                </Footer.Link>{" "}
                <Footer.Link href="#" className="text-white">
                  Terms &amp; Conditions
                </Footer.Link>{" "}
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="text-white" />{" "}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="CSTAD™"
            year={2022}
            className="text-white"
          />{" "}
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-white" />{" "}
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="text-white"
            />{" "}
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="text-white"
            />{" "}
            <Footer.Icon href="#" icon={BsGithub} className="text-white" />{" "}
            <Footer.Icon
              href="#"
              icon={BsDribbble}
              className="text-white"
            />{" "}
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
