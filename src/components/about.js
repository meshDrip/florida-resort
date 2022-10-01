import importAll from "./helper";
import { currentYear } from "./helper";
import css from "../styles/main.css";

importAll(require.context("../assets/staff", false, /\.(png|jpe?g|svg)$/));

currentYear();
