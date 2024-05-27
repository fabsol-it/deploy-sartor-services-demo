import {
  Container,
  Typography,
  Box,
} from '@mui/material';


export default function AboutPage() {

  return (
    <Container sx={{textAlign: "center", width: "80%", margin: "80px auto", height: "80Vh"}}>
      <Typography gutterBottom variant="h4">
        About Us
      </Typography>
      <Box
       sx={{
        margin: "20px 20px"
       }}
      >
        Welcome to Sartorial Master- Custom Tailoring, where every stitch tells a story of elegance and individuality. 
        As the epitome of bespoke craftsmanship, Mr. Mendis infuses his passion for sartorial artistry into every garment
        he creates. With a keen eye for detail and decades of experience, he orchestrates a symphony of fabric and form,
        transforming mere cloth into wearable masterpieces that reflect the unique essence of each client.
      </Box>
      <Box>
        At Sartorial Master, we believe that true luxury lies in the perfect fit and the personalized touch. 
        Our journey begins with a consultation, where Mr. Mendis himself collaborates closely with clients to understand 
        their distinct style preferences and sartorial aspirations. From selecting the finest fabrics sourced from around 
        the globe to meticulously crafting each garment by hand, our bespoke process ensures that every creation is a 
        manifestation of unparalleled quality and refinement. Whether it's a bespoke suit for a special occasion or a 
        wardrobe overhaul, Mendis Custom Tailoring is dedicated to exceeding expectations and crafting timeless pieces 
        that embody sophistication and style.
      </Box>
    </Container>
  );
}
