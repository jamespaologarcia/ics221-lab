const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return <p class="text-end m-4">&copy;{year} James Garcia</p>;
  };
  export default Footer;