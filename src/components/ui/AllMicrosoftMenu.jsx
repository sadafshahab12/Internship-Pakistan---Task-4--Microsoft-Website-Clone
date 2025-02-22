import { GoChevronRight } from "react-icons/go";

const AllMicrosoftMenu = () => {
  const NavigatetoSiteMap = (url) => {
    window.location.href = url;
  };
  return (
    <div className="w-[75rem] bg-menubggray border border-gray-400 ">
      <div className="grid grid-cols-6  gap-5  p-5">
        {/* Software Section */}
        <div className="space-y-8">
          <h1 className="text-13 font-medium">Software</h1>
          <ul className="space-y-6">
            <li className="text-13 cursor-pointer hover:underline">
              Windows Apps
            </li>
            <li className="text-13 cursor-pointer hover:underline">AI</li>
            <li className="text-13 cursor-pointer hover:underline">OneDrive</li>
            <li className="text-13 cursor-pointer hover:underline">Outlook</li>
            <li className="text-13 cursor-pointer hover:underline">Skype</li>
            <li className="text-13 cursor-pointer hover:underline">OneNote</li>
            <li className="text-13 cursor-pointer hover:underline">
              Microsoft Teams
            </li>
          </ul>
        </div>

        {/* PCs & Devices Section */}
        <div className="space-y-8">
          <h1 className="text-13 font-medium">PCs & Devices</h1>
          <ul className="space-y-6">
            <li className="text-13 cursor-pointer hover:underline">
              Shop Xbox
            </li>
            <li className="text-13 cursor-pointer hover:underline">
              Accessories
            </li>
          </ul>
        </div>

        {/* Entertainment Section */}
        <div className="space-y-8">
          <h1 className="text-13 font-medium">Entertainment</h1>
          <ul className="space-y-6">
            <li className="text-13 cursor-pointer hover:underline">
              Xbox games
            </li>
            <li className="text-13 cursor-pointer hover:underline">PC games</li>
            <li className="text-13 cursor-pointer hover:underline">
              Windows digital games
            </li>
          </ul>
        </div>

        {/* Business Section */}
        <div className="space-y-8">
          <h1 className="text-13 font-medium">Business</h1>
          <ul className="space-y-6">
            <li className="text-13 cursor-pointer hover:underline">
              Microsoft Cloud
            </li>
            <li className="text-13 cursor-pointer hover:underline">
              Microsoft Security
            </li>
            <li className="text-13 cursor-pointer hover:underline">Azure</li>
            <li className="text-13 cursor-pointer hover:underline">
              Dynamics 365
            </li>
            <li className="text-13 cursor-pointer hover:underline">
              Microsoft 365 for business
            </li>
            <li className="text-13 cursor-pointer hover:underline">
              Microsoft Industry
            </li>
            <li className="text-13 cursor-pointer hover:underline">
              Microsoft Power Platform
            </li>
            <li className="text-13 cursor-pointer hover:underline">
              Windows 365
            </li>
          </ul>
        </div>

        {/* Developer & IT Section */}
        <div className="space-y-8">
          <h1 className="text-13 font-medium">Developer & IT</h1>
          <ul className="space-y-6">
            <li className="text-13 cursor-pointer hover:underline">
              Microsoft Developer
            </li>
            <li className="text-13 cursor-pointer hover:underline">
              Documentation
            </li>
            <li className="text-13 cursor-pointer hover:underline">
              Microsoft Learn
            </li>
            <li className="text-13 cursor-pointer hover:underline">
              Microsoft Tech Community
            </li>
            <li className="text-13 cursor-pointer hover:underline">
              Azure Marketplace
            </li>
            <li className="text-13 cursor-pointer hover:underline">
              AppSource
            </li>
            <li className="text-13 cursor-pointer hover:underline">
              Visual Studio
            </li>
          </ul>
        </div>

        {/* Other Section */}
        <div className="space-y-8">
          <h1 className="text-13 font-medium">Other</h1>
          <ul className="space-y-6">
            <li className="text-13 cursor-pointer hover:underline">
              Free downloads & security
            </li>
            <li className="text-13 cursor-pointer hover:underline">
              Education
            </li>
            <li className="text-13 cursor-pointer hover:underline">
              Gift cards
            </li>
          </ul>
        </div>
      </div>
      <footer className="bg-sitemapbg py-2 border-b-2 ">
        <div
          onClick={() =>
            NavigatetoSiteMap("https://www.microsoft.com/en-pk/sitemap")
          }
          className="flex justify-center items-center gap-1 uppercase cursor-pointer hover:underline  "
        >
          <p className="text-13">view sitemap</p>
          <GoChevronRight className="w-6 h-6" />
        </div>
      </footer>
    </div>
  );
};

export default AllMicrosoftMenu;
