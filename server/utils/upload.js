import multer from "multer";

const storage = multer.memoryStorage({});

const upload = multer({ storage }).single("picture");

export default upload;
