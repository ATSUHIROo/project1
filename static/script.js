const form = document.querySelector('.new-order-form');
        form.style.display = 'none'; // Hide the form initially

        function toggleForm() {
            if (form.style.display === 'none') {
                form.style.display = 'flex';
            } else {
                form.style.display = 'none';
            }
        }

        function addOrder() {
            
            const orderer = document.getElementById('orderer').value;
            const deadline = document.getElementById('deadline').value;
            const orderContent = document.getElementById('orderContent').value;
            
            if (orderer && deadline && orderContent) {
                
                /*const table = document.querySelector('.order-table table');
                const newRow = table.insertRow();
                newRow.insertCell(0).textContent = table.rows.length;
                newRow.insertCell(1).textContent = orderer;
                newRow.insertCell(2).textContent = deadline;
                newRow.insertCell(3).textContent = orderContent;
                
                // Clear form
                document.getElementById('orderer').value = '';
                document.getElementById('deadline').value = '';
                document.getElementById('orderContent').value = '';
                form.style.display = 'none'; // Hide the form after adding
                */

            } else {

                alert("すべてのフィールドを入力してください。");

            }
        }