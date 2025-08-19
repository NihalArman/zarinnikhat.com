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
  clayImages = ['clay1.jpeg', 'clay2.jpeg', 'clay3.jpeg', 'clay4.jpeg', 'clay5.jpeg', 'clay6.jpeg', 'clay7.jpeg', 'clay8.jpeg', 'clay9.jpeg', 'clay10.jpeg'];
  digitalPaintings = ['digitalart1.jpeg', 'digitalart2.jpeg', 'digitalart4.jpg', 'digitalart6.jpg', 'digitalart7.jpg', 'digitalart8.jpg', 'digitalart9.jpg', 'digitalart10.jpg'];
  photography = ['photography1.jpeg', 'photography2.jpeg', 'photography3.jpeg', 'photography4.jpeg', 'photography5.jpeg', 'photography6.jpeg', 'photography7.jpeg', 'photography8.jpeg', 'photography9.jpeg', 'photography10.jpeg', 'photography11.jpeg'];
  acrylicPaintings = ['acrylicpaint1.jpeg', 'acrylicpaint2.jpeg', 'acrylicpaint3.jpeg'];

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
