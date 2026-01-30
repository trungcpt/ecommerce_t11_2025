SELECT * FROM "User"


UPDATE "User" SET "email" = 'trungcpt@gmail.com'

SELECT * FROM "Vendor"

SELECT 
Ro.name "role_name",
Pe.name "permission_name",
Pe.key
FROM "RolePermission" RP
LEFT JOIN "Role" Ro ON Ro.id = RP."roleID"
LEFT JOIN "Permission" Pe ON Pe.id = RP."permissionID"

INSERT INTO "RolePermission" ("roleID", "permissionID") VALUES ('95b224bc-e8c4-4f1b-9a9f-607c0afbf511', '70da501b-a2b3-4a68-80c3-f484e7b1ffd1')

SELECT * FROM "UserVendorRole"
SELECT * FROM "Role"

UPDATE "Role" SET "isSystemRole" = false

SELECT * FROM "User"

INSERT INTO "UserVendorRole" ("id", "userID", "vendorID", "roleID") VALUES ('f36c85bb-b55c-46aa-9125-76ddcd17cfab','0e1ca104-7eab-405c-a6f7-038a8506057a', 'fe6beb7b-d4ae-444e-95e1-0cbb3318b748', '95b224bc-e8c4-4f1b-9a9f-607c0afbf511')

