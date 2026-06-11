import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly companyLinks: FooterLink[] = [
    { label: 'About',             route: '/about' },
    { label: 'Contact',           route: '/contact' },
    { label: 'Privacy Policy',    route: '/privacy' },
    { label: 'Terms & Conditions',route: '/terms' },
  ];
}
