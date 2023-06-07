import multer from "multer";

const upload = multer({ dest: "memoryStorage" });

export default upload;
