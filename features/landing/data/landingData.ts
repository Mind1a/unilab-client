import { AccelerationLink } from "../types"
import { FaqProps } from "../types"
import python from "../assets/python.png"
import frontEndImage from "../assets/front-end.png"
import ictImage from "../assets/ict.png"
import graphicDesignImage from "../assets/graphic-design.png"
import interfaceCommunicationImage from "../assets/interface-communication-shared.png"
// Slide images imports
import slideImg1 from "@features/landing/assets/slide-image-1.png"
import slideImg2 from "@features/landing/assets/slide-image-2.png"
import Unicourse from "../components/composites/Unicourse"
import { acceleratedValues } from "motion"

export const uniCourseData = [
  {
    id: 1,
    title: "Python",
    image: python,
  },
  {
    id: 2,
    title: "ციფრული კომუნიკაციები",
    image: interfaceCommunicationImage,
  },
  {
    id: 3,
    title: "ICT პროექტების მართვა",
    image: ictImage,
  },
  {
    id: 4,
    title: "Front-End",
    image: frontEndImage,
  },
  {
    id: 5,
    title: "გრაფიკული დიზაინი",
    image: graphicDesignImage,
  },
  {
    id: 6,
    title: "ინტერფეისის დიზაინი",
    image: interfaceCommunicationImage,
  },
]

export const statsData = [
  { num: 61, text: "კურსი" },
  { num: 240, text: "სტაჟიორი" },
  { num: 595, text: "სტუდენტი" },
  { num: 835, text: "სერტიფიკატი" },
]

export const newsData = [
  {
    id: 1,
    title: "ქაოსიდან კოსმოსამდე",
    image: slideImg1,
    paragraph: `
    თუ ტექნოლოგიები შენი ცხოვრების ნაწილია, მაშინ დაგაინტერესებს
    სანდრო ასათიანის წიგნი “ქაოსიდან კოსმოსამდე”, რომელიც  წიგნის
    ვებ გამოცემას წარმოადგენს. ამ წიგნით მოყოლილი ამბები
    ტექნოლოგიებსა და თანამედროვე ადამიანის მაგიურ შესაძლებლობებზეა
    და მისი წაკითხვა, მოსმენა მხოლოდ ტექნოლოგიების წყალობით არის
    შესაძლებელი.
    `,
    date: "მაი. 29 2024",
    href: "#",
  },
  {
    id: 2,
    title: "ქაოსიდან კოსმოსამდე",
    image: slideImg2,
    paragraph: `
    თუ ტექნოლოგიები შენი ცხოვრების ნაწილია, მაშინ დაგაინტერესებს
    სანდრო ასათიანის წიგნი “ქაოსიდან კოსმოსამდე”, რომელიც  წიგნის
    ვებ გამოცემას წარმოადგენს. ამ წიგნით მოყოლილი ამბები
    ტექნოლოგიებსა და თანამედროვე ადამიანის მაგიურ შესაძლებლობებზეა
    და მისი წაკითხვა, მოსმენა მხოლოდ ტექნოლოგიების წყალობით არის
    შესაძლებელი.
    `,
    date: "მაი. 29 2024",
    href: "#",
  },
  {
    id: 3,
    title: "ქაოსიდან კოსმოსამდე",
    image: slideImg1,
    paragraph: `
    თუ ტექნოლოგიები შენი ცხოვრების ნაწილია, მაშინ დაგაინტერესებს
    სანდრო ასათიანის წიგნი “ქაოსიდან კოსმოსამდე”, რომელიც  წიგნის
    ვებ გამოცემას წარმოადგენს. ამ წიგნით მოყოლილი ამბები
    ტექნოლოგიებსა და თანამედროვე ადამიანის მაგიურ შესაძლებლობებზეა
    და მისი წაკითხვა, მოსმენა მხოლოდ ტექნოლოგიების წყალობით არის
    შესაძლებელი.
    `,
    date: "მაი. 29 2024",
    href: "#",
  },
  {
    id: 4,
    title: "ქაოსიდან კოსმოსამდე",
    image: slideImg2,
    paragraph: `
    თუ ტექნოლოგიები შენი ცხოვრების ნაწილია, მაშინ დაგაინტერესებს
    სანდრო ასათიანის წიგნი “ქაოსიდან კოსმოსამდე”, რომელიც  წიგნის
    ვებ გამოცემას წარმოადგენს. ამ წიგნით მოყოლილი ამბები
    ტექნოლოგიებსა და თანამედროვე ადამიანის მაგიურ შესაძლებლობებზეა
    და მისი წაკითხვა, მოსმენა მხოლოდ ტექნოლოგიების წყალობით არის
    შესაძლებელი.
    `,
    date: "მაი. 29 2024",
    href: "#",
  },
]

export const accelerationLinks: AccelerationLink[] = [
  { id: 1, label: "ციფრული მარკეტინგი", href: "/" },
  { id: 2, label: "გრაფიკული დიზაინი", href: "/" },
  { id: 3, label: "ინტერფეისის დიზაინი", href: "/" },
  { id: 4, label: "front-end react", href: "/" },
  { id: 5, label: "Python", href: "/" },
  { id: 6, label: "front-end (HTML, Css, js)", href: "/" },
  { id: 7, label: "ციფრული პროექტების მართვა", href: "/" },
]

export const Faqs: FaqProps[] = [
  {
    id: "01",
    question:
      "თუ პირველი გაერთიანებული ლექცია გავაცდინე, სად და როგორ შეიძლება ვნახო ჩანაწერი?",
    answer:
      "იმ შემთხვევაში, თუ პირველ გაერთიანებულ ლექციაზე დასწრება ვერ მოახერხე, შეხვედრის ჩანაწერი გუგლ კალენდარში შეგიძლია იპოვო.",
  },
  {
    id: "02",
    question: "სწავლის პროცესში რა პლატფორმებს ვიყენებთ საკომუნიკაციოდ?",
    answer:
      "იმ შემთხვევაში, თუ პირველ გაერთიანებულ ლექციაზე დასწრება ვერ მოახერხე, შეხვედრის ჩანაწერი გუგლ კალენდარში შეგიძლია იპოვო.",
  },
  {
    id: "03",
    question: "რა ხდება კურსის დასრულების შემდეგ?",

    answer:
      "იმ შემთხვევაში, თუ პირველ გაერთიანებულ ლექციაზე დასწრება ვერ მოახერხე, შეხვედრის ჩანაწერი გუგლ კალენდარში შეგიძლია იპოვო.",
  },
  {
    id: "04",
    question: "ვისთვისაა კურსი უფასო?",
    answer:
      "იმ შემთხვევაში, თუ პირველ გაერთიანებულ ლექციაზე დასწრება ვერ მოახერხე, შეხვედრის ჩანაწერი გუგლ კალენდარში შეგიძლია იპოვო.",
  },
  {
    id: "05",
    question: "რამდენი ლექცია გვექნება?",
    answer:
      "იმ შემთხვევაში, თუ პირველ გაერთიანებულ ლექციაზე დასწრება ვერ მოახერხე, შეხვედრის ჩანაწერი გუგლ კალენდარში შეგიძლია იპოვო.",
  },
  {
    id: "06",
    question: "როგორ გავიგო ვინ არის ლექტორი და სად ვნახო კურსის სილაბუსი?",
    answer:
      "იმ შემთხვევაში, თუ პირველ გაერთიანებულ ლექციაზე დასწრება ვერ მოახერხე, შეხვედრის ჩანაწერი გუგლ კალენდარში შეგიძლია იპოვო.",
  },
]

export const SideBarList = [
  {
    id: 1,
    section: "/მთავარი",
    href: "#main",
  },
  {
    id: 2,
    section: "/ჩვენ შესახებ ",
    href: "#aboutUs",
  },
  {
    id: 3,
    section: "/უნიკურსი",
    href: "#uniCourse",
  },
  {
    id: 4,
    section: "/აქსელერაცია",
    href: "#accelerated",
  },
  {
    id: 5,
    section: "/სიახლეები",
    href: "#news",
  },
  {
    id: 6,
    section: "/FAQ",
    href: "#faq",
  },
  {
    id: 7,
    section: "/კონტაქტი",
    href: "#contact",
  },
]
