<script>
    // Open and Close Modal 1
    const btnOpen1 = document.getElementById('btn-open-1');
    const btnClose1 = document.getElementById('btn-close-1');
    const modalContainer1 = document.getElementById('modal-container-1');

    btnOpen1.addEventListener('click', () => {
      modalContainer1.classList.add('show');
    });
    btnClose1.addEventListener('click', () => {
      modalContainer1.classList.remove('show');
    });

    // Open and Close Modal 2
    const btnOpen2 = document.getElementById('btn-open-2');
    const btnClose2 = document.getElementById('btn-close-2');
    const modalContainer2 = document.getElementById('modal-container-2');

    btnOpen2.addEventListener('click', () => {
      modalContainer2.classList.add('show');
    });
    btnClose2.addEventListener('click', () => {
      modalContainer2.classList.remove('show');
    });
  </script>