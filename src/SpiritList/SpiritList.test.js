import React from "react";
import SpiritList from "./SpiritList";
const Recipes = [
  {
    "slug": "Manhattan",
    "type":"bourbon",
    "title": "Manhattan",
    "text":"Ingredients<ul style='list-style-type:square' ><li>2 ounces bourbon or rye </li><li>1 ounce sweet vermouth</li><li> 2 dashes Angostura bitters</li><li> 1 dash orange bitters </li><li>Garnish: brandied cherry</li></ul> Steps<ul style='list-style-type:decimal'><li>Add all the bourbon (or rye), sweet vermouth and both bitters to a mixing glass with ice, and stir until well-chilled. </li><li>Strain into a chilled coupe. </li><li>Garnish with a brandied cherry.</li></ul>",
    "shortText":"Date Night",
    "timeStamp": "2020-06-29T15:12:24.000Z",
    "pubDate": "Thu, 29 Jun 2020 15:12:24 GMT",
    "image": {
            "_url": "https://www.liquor.com/thmb/gSN7fXX_rGkGi-3M6bmPhE7BqAk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg",
            "_height": "619",
            "_width": "1100"
}
  }
];

describe("SpiritList tests", () => {
  it("renders correctly", () => {
    const { container } = render(<SpiritList Recipes ={Recipes} />);
    expect(container).toMatchSnapshot();
  });
});