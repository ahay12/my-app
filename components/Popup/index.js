import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CardProduct from "../Product";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

export default function TransitionsModal({ children, title, img, titleChd }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <CardProduct click={handleOpen}>
        <div className="flex flex-col items-center pt-10 font-semibold">
          <Image src={img} width={70} height={100} />
          <h1>{title}</h1>
        </div>
      </CardProduct>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:w-[800px] md:w-[500px] xs:w-[500px] bg-white border border-black shadow-md p-4 flex flex-col">
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {titleChd}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {children}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
