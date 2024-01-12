import { Button } from "../ui/button";
export default function Opening() {
  async function handleClick() {
    console.log("yssysys");
    try {
      const response = await fetch("/api/download");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Wilfreno.pdf";
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      throw error;
    }
  }
  return (
    <>
      <h1
        className=" text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center my-5"
        style={{
          // WebkitTextStrokeColor: "hsl(var(--primary))",
          // WebkitTextStrokeWidth: "4px",
          // WebkitTextFillColor: "hsl(var(--background))",
        }}
      >
        Wilfreno Gayongan
      </h1>
      <h2 className="text-4xl lg:text-6xl font-semibold my-8 mx-auto">
        Web Developer
      </h2>
      <div className="space-x-5 my-5">
        <Button className="text-2xl"> Resumé</Button>
        <Button
          className="text-2xl"
          variant="secondary"
          onClick={handleClick}
          disabled
        >
          Contact me
        </Button>
      </div>
    </>
  );
}
