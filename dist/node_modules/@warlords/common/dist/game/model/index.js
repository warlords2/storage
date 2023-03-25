"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceType = exports.ProvinceType = exports.UnitType = exports.NpcType = exports.BuildingType = exports.province_scale_default = exports.building_scale_default = void 0;
// config default
var building_scale_production_json_1 = require("./configure/building.scale.production.json");
Object.defineProperty(exports, "building_scale_default", { enumerable: true, get: function () { return __importDefault(building_scale_production_json_1).default; } });
var province_scale_production_json_1 = require("./configure/province.scale.production.json");
Object.defineProperty(exports, "province_scale_default", { enumerable: true, get: function () { return __importDefault(province_scale_production_json_1).default; } });
// Enum's
var building_type_1 = require("./enum/building_type");
Object.defineProperty(exports, "BuildingType", { enumerable: true, get: function () { return building_type_1.BuildingType; } });
var npc_type_1 = require("./enum/npc_type");
Object.defineProperty(exports, "NpcType", { enumerable: true, get: function () { return npc_type_1.NpcType; } });
var unit_type_1 = require("./enum/unit_type");
Object.defineProperty(exports, "UnitType", { enumerable: true, get: function () { return unit_type_1.UnitType; } });
var province_type_1 = require("./enum/province_type");
Object.defineProperty(exports, "ProvinceType", { enumerable: true, get: function () { return province_type_1.ProvinceType; } });
var resource_type_1 = require("./enum/resource_type");
Object.defineProperty(exports, "ResourceType", { enumerable: true, get: function () { return resource_type_1.ResourceType; } });
