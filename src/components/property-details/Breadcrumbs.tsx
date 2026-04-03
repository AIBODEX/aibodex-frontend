
const Breadcrumbs = () => {
  return (
    <div className="flex items-center text-sm text-gray-500 space-x-2 py-6">
      <span className="hover:text-teal-600 cursor-pointer">Home</span>
      <span>/</span>
      <span className="hover:text-teal-600 cursor-pointer">Lagos</span>
      <span>/</span>
      <span className="hover:text-teal-600 cursor-pointer">Lekki phase 1</span>
      <span>/</span>
    </div>
  );
};

export default Breadcrumbs;
