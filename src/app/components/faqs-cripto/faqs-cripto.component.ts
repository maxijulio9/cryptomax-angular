import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs-cripto',
  imports: [CommonModule],
  templateUrl: './faqs-cripto.component.html',
  styleUrl: './faqs-cripto.component.css'
})
export class FaqsCriptoComponent {
 faqs = [
    {
      question: 'What is Crypto Max?',
      answer: 'Crypto Max is a platform designed to help users manage and track their cryptocurrency portfolios effectively.',
      isOpen: false
    },
    {
      question: 'How do I create an account?',
      answer: "You can create an account by clicking on the 'Sign Up' button on the homepage and filling out the registration form.",
      isOpen: false
    },
    {
      question: 'How can I reset my password?',
      answer: "If you forget your password, you can reset it by clicking on the 'Forgot Password?' link on the login page.",
      isOpen: false
    },
    {
      question: 'What cryptocurrencies are supported?',
      answer: 'Crypto Max supports a wide range of cryptocurrencies including Bitcoin, Ethereum, Ripple, and many others. You can view the full list on our supported cryptocurrencies page.',
      isOpen: false
    },
    { 
      question: 'How do I add a new cryptocurrency to my portfolio?',
      answer: 'To add a new cryptocurrency, go to the "Portfolio" section, click on "Add Cryptocurrency", and fill in the required details.',
      isOpen: false
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Yes, Crypto Max has a mobile app available for both iOS and Android devices. You can download it from the App Store or Google Play.',
      isOpen: false
    }
  ];

  toggleFaqs(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  
}
