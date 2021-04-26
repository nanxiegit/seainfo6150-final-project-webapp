import React from "react";
import CocktailImage from "./CocktailImage";

describe("CocktailImage tests", () => {
  it("renders correctly", () => {
    const { container } = render(<CocktailImage title={"Manhattan"} 
      url={"https://www.liquor.com/thmb/gSN7fXX_rGkGi-3M6bmPhE7BqAk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg"} />);
    expect(container).toMatchSnapshot();
  });
});