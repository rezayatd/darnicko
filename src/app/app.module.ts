import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeHeaderComponent } from './components/home/header/header.component';
import { AboutHeaderComponent } from './components/about/header/header.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { PreviewComponent } from './components/home/preview/preview.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Item1Component } from './components/about/item1/item1.component';
import { Item2Component } from './components/about/item2/item2.component';
import { OurTeamComponent } from './components/about/our-team/our-team.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact/form/form.component';
import { ContactCardsComponent } from './components/contact/cards/cards.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PricingCard1Component } from './components/pricing/pricing-card1/pricing-card1.component';
import { PricingCard2Component } from './components/pricing/pricing-card2/pricing-card2.component';
import { PricingCard3Component } from './components/pricing/pricing-card3/pricing-card3.component';
import { FaqComponent } from './components/faq/faq.component';
import { FaqAccordion1Component } from './components/faq/faq-accordion1/faq-accordion1.component';
import { FaqAccordion2Component } from './components/faq/faq-accordion2/faq-accordion2.component';
import { FaqContactUsComponent } from './components/faq/faq-contact-us/faq-contact-us.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogMainComponent } from './components/blog-home/blog-main/blog-main.component';
import { NewsComponent } from './components/blog-home/news/news.component';
import { BlogCard1Component } from './components/blog-home/blog-card1/blog-card1.component';
import { BlogCard2Component } from './components/blog-home/blog-card2/blog-card2.component';
import { BlogCard3Component } from './components/blog-home/blog-card3/blog-card3.component';
import { BlogContactUsComponent } from './components/blog-home/blog-contact-us/blog-contact-us.component';
import { PostAuthorComponent } from './components/blog-post/post-author/post-author.component';
import { PostHeaderComponent } from './components/blog-post/post-header/post-header.component';
import { PostContentComponent } from './components/blog-post/post-content/post-content.component';
import { PostCommentComponent } from './components/blog-post/post-comment/post-comment.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { PortfolioOverviewComponent } from './components/portfolio-overview/portfolio-overview.component';
import { ProtfolioContentComponent } from './components/portfolio-overview/protfolio-content/protfolio-content.component';
import { ProtfolioItemContentComponent } from './components/portfolio-item/protfolio-item-content/protfolio-item-content.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeHeaderComponent,
    AboutHeaderComponent,
    FeaturesComponent,
    PreviewComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    Item1Component,
    Item2Component,
    OurTeamComponent,
    ContactComponent,
    ContactFormComponent,
    ContactCardsComponent,
    PricingComponent,
    PricingCard1Component,
    PricingCard2Component,
    PricingCard3Component,
    FaqComponent,
    FaqAccordion1Component,
    FaqAccordion2Component,
    FaqContactUsComponent,
    BlogHomeComponent,
    BlogPostComponent,
    BlogMainComponent,
    NewsComponent,
    BlogCard1Component,
    BlogCard2Component,
    BlogCard3Component,
    BlogContactUsComponent,
    PostAuthorComponent,
    PostHeaderComponent,
    PostContentComponent,
    PostCommentComponent,
    PortfolioItemComponent,
    PortfolioOverviewComponent,
    ProtfolioContentComponent,
    ProtfolioItemContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
