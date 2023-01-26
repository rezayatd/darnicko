import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { PortfolioOverviewComponent } from './components/portfolio-overview/portfolio-overview.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestComponent } from './components/test/test.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'faq', component: TestComponent},
  {path: 'bloghome', component: BlogHomeComponent},
  {path: 'blogpost', component: BlogPostComponent},
  {path: 'portfoliooverview', component: PortfolioOverviewComponent},
  {path: 'portfolioitem', component: PortfolioItemComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
