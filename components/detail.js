const Detail = ({ title, children }) => (
  <div>
    <p className="text-sm text-gray-500">{title}</p>
    <div className="md:text-lg lg:text-xl">{children}</div>
  </div>
);

export default Detail;
