"use client";

import { UserInformations } from "./user-informations";
import { Banner } from "./banner";

export function ProfileHeader() {
  return (
    <div className="space-y-4">
      <Banner />
      <UserInformations />
    </div>
  )
}

