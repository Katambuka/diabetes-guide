-- CreateIndex
CREATE INDEX "GlucoseReading_patientId_idx" ON "GlucoseReading"("patientId");

-- CreateIndex
CREATE INDEX "GlucoseReading_timestamp_idx" ON "GlucoseReading"("timestamp");

-- CreateIndex
CREATE INDEX "GlucoseReading_value_idx" ON "GlucoseReading"("value");

-- CreateIndex
CREATE INDEX "Patient_email_idx" ON "Patient"("email");

-- CreateIndex
CREATE INDEX "Patient_birthDate_idx" ON "Patient"("birthDate");

-- CreateIndex
CREATE INDEX "Patient_createdAt_idx" ON "Patient"("createdAt");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_resetToken_idx" ON "User"("resetToken");
