import "@testing-library/jest-dom"
import { render,waitFor,fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Body from "../Body";
import store from "../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:() =>{
            Promise.resolve(MENU_DATA);
        },
    });
});

test("Shimmer should load on Homepage", () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
  
    const shimmer = body.getByTestId("shimmer");
  
    expect(shimmer.children.length).toBe(8);
  
    console.log(shimmer);
  });
  
  test("Restaurants should load on Homepage", async () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
  
    await waitFor(() => expect(body.getByTestId("search-btn")));

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(15);
  });
  
  