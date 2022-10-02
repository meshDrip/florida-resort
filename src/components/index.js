import css from "../styles/main.css";
import { currentYear } from "./helper";
import importAll from "./helper";

const images = importAll(
  require.context("../assets/", false, /\.(png|jpe?g|svg)$/),
  require.context("../assets/gallery/", false, /\.(png|jpe?g|svg)$/)
);

currentYear();
