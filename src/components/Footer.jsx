import { FaGlobeAmericas } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] py-8">
      <div className="container mx-auto px-4 text-[#616161]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div>
            <h3 className="font-semibold mb-2">{`What's`} New</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-11">
                  Surface Book 3
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Surface Pro
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Microsoft Copilot
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Microsoft 365
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Windows 11 Apps
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Microsoft Store</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-11">
                  {" "}
                  Account profile
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Download Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Order tracking
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Education</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-11">
                  Microsoft in Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Devices for Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Microsoft Teams for Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Microsoft 365 Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Azure for Students
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Business</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-11">
                  Microsoft Cloud
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Microsoft Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Azure
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Dynamics 365
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Microsoft Advertising
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline text-11">
                  Microsoft 365 Copilot
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Microsoft Teams
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Developer & IT</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-11">
                  Microsoft Developer
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Microsoft Learn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Microsoft Tech Community
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline text-11">
                  Azure Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  AppSource
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Microsoft Power Platform
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Visual Studio
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-11">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  About Microsoft
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Company News
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Privacy at Microsoft
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-11">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" mt-6 pt-4 flex flex-col md:flex-row md:justify-between text-11">
          <div className=" flex  flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-4">

            <FaGlobeAmericas className="w-6 h-6" />
            <select className="bg-gray-200 text-gray-700 p-2 rounded">
              <option>English (Pakistan)</option>
              <option>English (US)</option>
              <option>English (UK)</option>
            </select>
            </div>
            <a
              href="#"
              className="hover:underline text-11 flex items-center gap-4"
            >
              <SiGnuprivacyguard className="w-5 h-5" /> Your Privacy Choices
            </a>
            <a href="#" className="hover:underline text-11">
              Consumer Health Privacy
            </a>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            <a href="#" className="hover:underline text-11">
              Contact Microsoft{" "}
            </a>
            <a href="#" className="hover:underline text-11">
              {" "}
              Privacy{" "}
            </a>

            <a href="#" className="hover:underline text-11">
              {" "}
              Terms of Use
            </a>

            <a href="#" className="hover:underline text-11">
              Trademarks
            </a>
            <a href="#" className="hover:underline text-11">
              About our Ads
            </a>
            <span>&copy; Microsoft 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
