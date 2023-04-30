import { filtered } from "../../models/themes";
import "./Filter.css";
import { FILTER, FILTER_DROPDOWN } from "../../constants";

export function Filter() {
  return (
    <>
      <div className="dropdown">
        <input type="checkbox" id="dropdown"></input>
        <label className="dropdown__face" htmlFor="dropdown">
          <div className="dropdown__text">{FILTER_DROPDOWN}</div>
          <div className="dropdown__arrow"></div>
        </label>

        <ul className="dropdown__items">
          {FILTER.map((filter) => (
            <li
              className="dropdown__item"
              key={filter.id}
              onClick={() => {
                filtered(filter);
              }}
            >
              {filter.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
