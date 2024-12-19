const Page = ({ params }) => {
  return (
    <div>
      <div>Meal details Page</div>
      <p>Slug: {params.slug}</p>
    </div>
  );
};

export default Page;
