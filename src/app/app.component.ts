import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { exercise } from "./interface";
import exos from "../assets/exos.json";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "MFL";
  mflTargetedMuscleSite: string;
  exercises: exercise[];
  constructor() {
    this.exercises = [...exos.GymExercises, ...exos.FullBodyExercises];
    this.mflTargetedMuscleSite =
      "https://musclewiki.com/workout-generator/targeted-muscles";
  }

  ngOnInit() {}

  copyToClipboard(set: string) {
    navigator.clipboard.writeText(set);
  }

  isEmbedded(): boolean {
    return window.self !== window.top;
  }

  isEmbeddedInNotion(): boolean {
    return document.referrer.includes("notion.so");
  }
}
