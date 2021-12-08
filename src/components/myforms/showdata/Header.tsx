const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <p className="font-bold text-2xl text-black">MyForms</p>
      <div>
        <button className="bg-green-400 hover:bg-green-500 text-white w-28 h-9 rounded">
          Add Form
        </button>
        <button className="ml-5 bg-indigo-400 hover:bg-indigo-500 text-white w-28 h-9 rounded">
          Integrations
        </button>
      </div>
    </div>
  );
};

export default Header;
