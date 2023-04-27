function Footer() {
  return (
    <div className="fixed bottom-0 bg-neutral-200 w-full h-8 flex justify-center">
      <p className="text-center my-auto text-md text-gray-600">
        Berliner Radmarkt ® 2023 von{" "}
        <a
          href="https://github.com/canyapalak"
          target="_blank"
          className="text-red-700 hover:text-red-500"
        >
          Can Yapalak
        </a>
      </p>
    </div>
  );
}

export default Footer;
