
import { FaqProps } from "../types"
import python from "../assets/python.png"
import frontEndImage from "../assets/front-end.png"
import ictImage from "../assets/ict.png"
import graphicDesignImage from "../assets/graphic-design.png"
import interfaceCommunicationImage from "../assets/interface-communication-shared.png"

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
