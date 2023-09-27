const express = require("express");
const router = express.Router();

const ZingController = require("../Controllers/ZingController");

//getSong
router.get("/song", ZingController.getSong);

//getDetailPlaylist
router.get("/detailplaylist", ZingController.getDetailPlaylist);

//getHome
router.get("/home", ZingController.getHome);

//search
router.get("/search", ZingController.search);

//getTop100
router.get("/top100", ZingController.getTop100);

//getChartHome
router.get("/charthome", ZingController.getChartHome);

//getNewReleaseChart
router.get("/newreleasechart", ZingController.getNewReleaseChart);

//getInfoSong
router.get("/infosong", ZingController.getInfoSong);

//getArtist
router.get("/artist", ZingController.getArtist);

//getLyric
router.get("/lyric", ZingController.getLyric);

//getVideo
router.get("/video", ZingController.getVideo);

module.exports = router;
