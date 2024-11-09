// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const generateBtn = document.getElementById('generate-btn');
    const downloadBtn = document.getElementById('download-btn');
    const preview = document.getElementById('resume-preview');
  
    // Function to update the resume preview
    const updatePreview = () => {
      document.getElementById('preview-name').textContent = document.getElementById('full-name').value || 'Your Name';
      document.getElementById('preview-email').textContent = `Email: ${document.getElementById('email').value || 'example@example.com'}`;
      document.getElementById('preview-phone').textContent = `Phone: ${document.getElementById('phone').value || '123-456-7890'}`;
      
      const linkedinValue = document.getElementById('linkedin').value;
      const linkedinLink = document.getElementById('preview-linkedin');
      if (linkedinValue) {
        linkedinLink.innerHTML = `LinkedIn: <a href="${linkedinValue}" target="_blank">${linkedinValue}</a>`;
      } else {
        linkedinLink.textContent = 'LinkedIn: ';
      }
  
      document.getElementById('preview-job-title').textContent = document.getElementById('job-title').value || 'Job Title at Company';
      document.getElementById('preview-experience-dates').textContent = document.getElementById('experience-dates').value || 'Jan 2020 - Dec 2021';
      document.getElementById('preview-job-description').textContent = document.getElementById('job-description').value || 'Job description goes here.';
  
      document.getElementById('preview-school').textContent = document.getElementById('school').value || 'School Name';
      document.getElementById('preview-degree').textContent = document.getElementById('degree').value || 'Degree';
      document.getElementById('preview-graduation-year').textContent = document.getElementById('graduation-year').value || 'Graduation Year';
  
      document.getElementById('preview-skills').textContent = document.getElementById('skills').value || 'Skill1, Skill2, Skill3';
    };
  
    // Event listener for the Generate button
    generateBtn.addEventListener('click', () => {
      updatePreview();
      alert('Resume Preview Updated!');
    });
  
    // Event listener for automatic live preview
    form.addEventListener('input', updatePreview);
  
    // Event listener for the Download PDF button
    downloadBtn.addEventListener('click', () => {
      // Use jsPDF to generate PDF from the resume preview
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
  
      // Use html2canvas or similar if you need more complex rendering
      // For simplicity, we'll use text placements here
  
      // Get all text content from the preview
      const name = document.getElementById('preview-name').textContent;
      const email = document.getElementById('preview-email').textContent;
      const phone = document.getElementById('preview-phone').textContent;
      const linkedin = document.getElementById('preview-linkedin').textContent;
  
      const jobTitle = document.getElementById('preview-job-title').textContent;
      const jobDates = document.getElementById('preview-experience-dates').textContent;
      const jobDesc = document.getElementById('preview-job-description').textContent;
  
      const school = document.getElementById('preview-school').textContent;
      const degree = document.getElementById('preview-degree').textContent;
      const graduationYear = document.getElementById('preview-graduation-year').textContent;
  
      const skills = document.getElementById('preview-skills').textContent;
  
      // Add content to PDF
      let y = 10;
      doc.setFontSize(22);
      doc.text(name, 105, y, { align: 'center' });
      y += 10;
      doc.setFontSize(12);
      doc.text(email, 105, y, { align: 'center' });
      y += 7;
      doc.text(phone, 105, y, { align: 'center' });
      y += 7;
      doc.text(linkedin, 105, y, { align: 'center' });
  
      y += 10;
      doc.setFontSize(16);
      doc.text('Work Experience', 10, y);
      y += 7;
      doc.setFontSize(12);
      doc.text(jobTitle, 10, y);
      y += 6;
      doc.text(jobDates, 10, y);
      y += 6;
      doc.text(jobDesc, 10, y, { maxWidth: 190 });
      
      y += 10;
      doc.setFontSize(16);
      doc.text('Education', 10, y);
      y += 7;
      doc.setFontSize(12);
      doc.text(school, 10, y);
      y += 6;
      doc.text(degree, 10, y);
      y += 6;
      doc.text(graduationYear, 10, y);
  
      y += 10;
      doc.setFontSize(16);
      doc.text('Skills', 10, y);
      y += 7;
      doc.setFontSize(12);
      doc.text(skills, 10, y);
  
      // Save the PDF
      doc.save(`${document.getElementById('full-name').value || 'resume'}.pdf`);
    });
  });
  