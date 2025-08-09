import { Component, HostListener } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-showcase-page',
  imports: [NgOptimizedImage],
  standalone: true, // make sure it's standalone if using Angular 17+
  templateUrl: './showcase-page.html',
  styleUrl: './showcase-page.css'
})
export class ShowcasePage {
  clayImages = ['clay1.jpeg', 'clay2.jpeg', 'clay3.jpeg', 'clay4.jpeg', 'clay5.jpeg'];
  digitalPaintings = ['digitalart1.jpeg', 'digitalart2.jpeg', 'digitalart3.jpg', 'digitalart4.jpg', 'digitalart5.jpg', 'digitalart6.jpg', 'digitalart7.jpg', 'digitalart8.jpg', 'digitalart9.jpg', 'digitalart10.jpg', 'digitalart11.jpg'];
  acrylicPaintings = ['acrylicpaint1.jpeg', 'acrylicpaint2.jpeg', 'acrylicpaint3.jpeg', 'acrylicpaint4.jpeg'];

  selectedImage: string | null = null;

  openImage(imgPath: string) {
    this.selectedImage = imgPath;
  }

  closeImage() {
    this.selectedImage = null;
  }

  @HostListener('document:keydown.escape')
  handleEscape() {
    this.closeImage();
  }
}
