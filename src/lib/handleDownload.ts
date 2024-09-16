const handleDownload = () => {
    const pdfUrl = "Rakibul_Alam_Frontend_Engineer.pdf";
  
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Rakibul_Alam_Frontend_Engineer"); 
  
    document.body.appendChild(link);
    link.click();
  
    document.body.removeChild(link);
  };
  
  export default handleDownload;
  