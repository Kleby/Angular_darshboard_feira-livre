import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  imgSrc: string = '';

  onDragOver(event: any) {
    event.preventDefault(); // Impede o comportamento padrão
  }

  getFile(files: any){
    const file = files[0]; // Supondo que você está interessado apenas no primeiro arquivo
    
    if (files.length > 0) {
      if (file.type.startsWith('image/')) {
        // Este é um arquivo de imagem
        const reader = new FileReader();
        reader.onload = () => {
          this.imgSrc = reader.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        console.log('O arquivo não é uma imagem.');
      }
    }
  }

  onDrop(event: any) {
    event.preventDefault(); // Impede o comportamento padrão
    const files = event.dataTransfer.files;
    this.getFile(files);

  }

  onClick(event: any){    
    this.getFile(event.target.files)
    
  }
}
