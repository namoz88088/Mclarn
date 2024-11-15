// script.test.js

import { jest } from "@jest/globals";

document.querySelector = jest.fn();

import { toggleMenu } from "./script.js";
